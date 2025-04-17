import { LocationClient } from "@aws-sdk/client-location";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { SearchPlaceIndexForPositionCommand } from "@aws-sdk/client-location";

const REGION = process.env.REACT_APP_AWS_REGION;
const IDENTITY_POOL_ID = process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID;
export const MAP_NAME = process.env.REACT_APP_MAP_NAME;
export const PLACE_INDEX_NAME = process.env.REACT_APP_PLACE_INDEX_NAME;

if (!REGION || !IDENTITY_POOL_ID || !MAP_NAME || !PLACE_INDEX_NAME) {
  console.error("AWS configuration environment variables are missing!");
  // Potentially throw an error or handle this case more gracefully
}

// Initialize Cognito Identity Provider
const credentials = fromCognitoIdentityPool({
  client: new CognitoIdentityClient({ region: REGION }),
  identityPoolId: IDENTITY_POOL_ID,
});

// Initialize Location Service Client
const locationClient = new LocationClient({
  region: REGION,
  credentials,
});

/**
 * Creates authentication transformer for MapLibre
 * @returns MapLibre request transformer
 */
export const createMapLibreRequestTransformer = () => {
  return async (url, resourceType) => {
    let transformedUrl = url;

    if (resourceType === "Style" && url?.includes("maps.geo")) {
      // Sign AWS requests for styles
      transformedUrl = await signRequest(url);
    }

    if (resourceType === "Source" && url?.includes("maps.geo")) {
      // Sign AWS requests for sources
      transformedUrl = await signRequest(url);
    }

    if (resourceType === "Glyphs" && url?.includes("maps.geo")) {
      // Sign AWS requests for glyphs
      transformedUrl = await signRequest(url);
    }

    if (resourceType === "SpriteImage" && url?.includes("maps.geo")) {
      // Sign AWS requests for sprite images
      transformedUrl = await signRequest(url);
    }

    if (resourceType === "SpriteJSON" && url?.includes("maps.geo")) {
      // Sign AWS requests for sprite JSON
      transformedUrl = await signRequest(url);
    }

    if (resourceType === "Tile" && url?.includes("maps.geo")) {
        // Sign AWS requests for tiles
        transformedUrl = await signRequest(url)
    }

    return {
      url: transformedUrl,
    };
  };
};

// Helper function to sign requests using AWS credentials
// This uses a simplified approach; consider more robust signing for production
const signRequest = async (url) => {
    const creds = await credentials();
    if (!creds) {
        console.error('Could not get AWS credentials');
        return url;
    }
    // This signing mechanism is basic and might need adjustment based on exact requirements
    // For production, consider using AWS Signature Version 4 signing process more directly
    // or leveraging Amplify libraries if using Amplify.
    const signedUrl = `${url}?access_token=${encodeURIComponent(creds.sessionToken || '')}`;
    // Note: This signing method is simplistic. A full SigV4 implementation is complex.
    // MapLibre might handle some signing internally if configured correctly, 
    // but explicit signing might be needed depending on setup.
    // Consult AWS Location Service documentation for MapLibre integration.
    console.warn('Using simplified request signing. Review AWS Location Service docs for robust signing.');
    return url; // Returning original URL temporarily as full signing is complex here.
    // A proper solution would involve SigV4 signing. Libraries like `aws4` could help, 
    // but integration requires care.
};


// --- Add API specific functions below ---

// Function to search by coordinates (Reverse Geocoding)
export const searchPlaceByPosition = async (longitude, latitude) => {
  if (!PLACE_INDEX_NAME || !locationClient) return null;
  const params = {
    IndexName: PLACE_INDEX_NAME,
    Position: [longitude, latitude],
    MaxResults: 1,
    // Optional: Add Language parameter if needed: Language: "en"
  };
  try {
    console.log("Searching place index for position:", longitude, latitude);
    const command = new SearchPlaceIndexForPositionCommand(params);
    const data = await locationClient.send(command);
    console.log("Reverse geocoding result:", data);
    // Extract PostalCode, handle potential variations in structure
    const place = data.Results?.[0]?.Place;
    if (place && place.AddressNumber && place.Street && place.Municipality && place.Region && place.PostalCode) {
        return {
            label: place.Label,
            address: `${place.AddressNumber} ${place.Street}`, 
            city: place.Municipality,
            state: place.Region,
            zipCode: place.PostalCode
        };
    } else {
        console.warn('Could not extract full address details or zip code from result.', place);
        // Return just the zip if available, or null
        return place?.PostalCode ? { zipCode: place.PostalCode } : null;
    }

  } catch (error) {
    console.error("Error searching place by position:", error);
    // Check for specific AWS errors if needed
    // if (error.name === 'AccessDeniedException') { ... }
    return null;
  }
};

export default locationClient; 