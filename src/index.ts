import { APIGatewayProxyHandler, APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";

export const handler: APIGatewayProxyHandler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    return { 
        statusCode: 200, 
        body: event.body ?? '' 
    };
}