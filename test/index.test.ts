import { APIGatewayProxyResult } from 'aws-lambda';
import { handler } from '../src/index';

const mockContext = {
  callbackWaitsForEmptyEventLoop: true,
  functionName: 'MockFunction',
  functionVersion: '1.0',
  invokedFunctionArn: 'arn:aws:lambda:region:account-id:function:MockFunction',
  memoryLimitInMB: '128',
  awsRequestId: 'mocked-request-id',
  logGroupName: '/aws/lambda/MockFunction',
  logStreamName: '2022/01/01/[$LATEST]mocked-log-stream-name',
  getRemainingTimeInMillis: () => 5000,
  done: () => {},
  fail: (error: any) => {},
  succeed: (result: any) => {}
};

const mockCallback = (
  error: Error | string | null | undefined,
  result?: APIGatewayProxyResult | undefined
) => {};

describe('API Gateway Handler Test', () => {
  it('should return status code 200 and body from event', async () => {
    const event: any = {
      body: 'Mock Event Body'
    };

    const result = await handler(event, mockContext, mockCallback);

    expect(result).toEqual({
      statusCode: 200,
      body: 'Mock Event Body'
    });
  });
});