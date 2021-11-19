import { OAuth2Client } from "google-auth-library";
import keys = require("../GoogleAuth/apps.googleusercontent.com.json");

export const verifyIdToken = async (idToken: string): Promise<verifyOutPut> => {
    const oAuth2Client = new OAuth2Client(
        keys.web.client_id,
        keys.web.client_secret
        //keys.web.redirect_uris[0]
    );
    const ticket = await oAuth2Client.verifyIdToken({
        idToken: idToken,
        audience: keys.web.client_id,
    });
    return {
        result: true,
        userID: ticket.getUserId(),
    };
};

export type verifyOutPut = {
    result: boolean;
    userID: string | null;
};
