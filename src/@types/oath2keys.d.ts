declare module "*apps.googleusercontent.com.json" {
    type web = {
        client_id: string;
        project_id: string;
        auth_uri: string;
        token_uri: string;
        auth_provider_x509_cert_url: string;
        client_secret: string;
    };
    type auth2_keys = {
        web: web;
    };

    const value: auth2_keys;
    export = value;
}
