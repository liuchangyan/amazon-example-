import * as apigatewayv2 from '@aws-cdk/aws-apigatewayv2';
import {Duration, StackProps} from '@aws-cdk/core';
import {IFunction} from '@aws-cdk/aws-lambda';

export interface APIStackProps extends StackProps {
    lambdaInstance: IFunction;
    
//     inboundDbAccessSecurityGroup: string
//     rdsEndpoint: string
//     rdsDbUser: string
//     rdsDb: string
}

export class ApigatewayStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: APIStackProps) {
    super(scope, id, props);
    
    const api=new apigatewayv2.HttpApi(lambdaStack,'Api',{
        defaultIntegration : new apigatewayv2.HttpProxyIntegration({
        url: 'https://baidu.com',
        })
    });
    
    api.addRoutes({
      integration :new apigatewayv2.LambdaProxyIntegration({
      handler: props.lambdaInstance,
      }),
      path: '/generic',
    //   vpc: ec2.Vpc,
    //   vpcSubnets?: ec2.ISubnet[],
    //   securityGroup: sg-29b03843,
      methods: [ apigatewayv2.HttpMethod.GET,apigatewayv2.HttpMethod.POST ],
    });

    
    
    }
    }
