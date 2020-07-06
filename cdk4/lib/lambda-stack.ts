import {App, Stack, StackProps} from '@aws-cdk/core';
import {Peer, Port, SecurityGroup, SubnetType, Vpc} from '@aws-cdk/aws-ec2'

export class LambdaStack extends Stack {

    constructor(scope: App, id: string, props?: StackProps) {
        super(scope, id, props);




    }
}



