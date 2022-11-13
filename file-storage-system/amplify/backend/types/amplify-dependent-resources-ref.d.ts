export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "filestoragesystemf236f6a3": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "function": {
        "S3Trigger7ceb26ce": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "textupload": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "storage": {
        "smApps": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "api": {
        "textupload": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}