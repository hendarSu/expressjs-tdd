const { index, penjumlahan } = require('./../controllers/base.controller');
const mockRequest = (body = {}) => ({ body });
const mockResponse = () => {
    const res = {};
    res.json = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    return res;
}

describe("Test Base Controller", () => {
    test('[+] Request endpoint index + with asyncronus', async ()=> {
        const req = mockRequest();
        const res = mockResponse();

        await index(req, res);

        expect(res.status).toBeCalledWith(200);
        expect(res.json).toBeCalledWith({
            status : true,
            message : "success call api index!"
        });
    })

    test('[+] Request endpoint penjumlahan', () => {
        const req = mockRequest( { input1 : 2, input2 : 2 } );
        const res = mockResponse();
        penjumlahan(req, res);

        expect(res.status).toBeCalledWith(200);
        expect(res.json).toBeCalledWith({
            status: true,
            message : "success penjumlahan",
            data : {
                value : req.body.input1 + req.body.input2
            }
        });
    })
    test('[-] Request endpoint penjumlahan - dengaan inputan 1 undefine', ()=> {
        const req = mockRequest( { input2 : 2 } );
        const res = mockResponse();
        penjumlahan(req, res);

        expect(res.status).toBeCalledWith(400);
        expect(res.json).toBeCalledWith({
            status: false,
            message : "Inputan tidak sesuai kriteria",
        });
    })
})