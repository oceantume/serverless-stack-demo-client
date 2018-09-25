const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-gn882iwzfybr"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "2nhzukr9gl"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_jGmTeZEEg",
    APP_CLIENT_ID: "vegar519mrr4hslmsejuhn7va",
    IDENTITY_POOL_ID: "us-east-1:c638d7af-38b7-45a6-9596-2f09c5aebf5f"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-nvs42drftzk3"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "umgb95sk9i"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_AMIHkh85c",
    APP_CLIENT_ID: "2nvavtkdj5f2uof52hufej43g8",
    IDENTITY_POOL_ID: "us-east-1:203dd87f-dce9-4e6a-a964-a06dacc80335"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};