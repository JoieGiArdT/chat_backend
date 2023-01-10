"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WhatsappService {
    verifyToken(receivedToken, challenge) {
        const accessToken = String(process.env.TOKENA);
        return (challenge != null && receivedToken != null && receivedToken === accessToken) ? challenge : 'VERIFICATION_FAILED';
    }
    receivedMessageWhatsapp({ body }) {
        const _body = {
            exterals_id: {
                wa_id: body.id
            },
            conversation_id: '123',
            from: body.from,
            type: body.type,
            content_message: {
                value: true,
                text: {
                    preview_url: false,
                    body: body.text.body
                }
            }
        };
        return _body;
    }
}
exports.default = new WhatsappService();
