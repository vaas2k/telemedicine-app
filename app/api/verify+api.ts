import jwt from 'jsonwebtoken';
export async function GET(request: Request) {


    console.log('verifying token');
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.log('No header');
        return new Response('Missing or malformed token', { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    console.log(token);
    let decode;
    try {

        decode = jwt.verify(token, process.env.JWT_SECRETKEY!);
        if (decode) {
            console.log(decode);
        }
        else {
            console.log('no');
        }

    } catch (error) {
        console.log(error);
    }

    return new Response(JSON.stringify(decode), {
        status: 200,
    });
}
