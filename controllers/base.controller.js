
const index = async (req, res) => {
    res.status(200).json({
        status : true,
        message : "success call api index!"
    });
}

const penjumlahan = (req, res) => {
    const { input1 , input2 } = req.body;
    if (input1 && input2) {
        const value = input1 + input2;

        res.status(200).json({
            status: true,
            message : "success penjumlahan",
            data : {
                value
            }
        });
    } else {
        res.status(400).json({
            status: false,
            message : "Inputan tidak sesuai kriteria"
        });
    }
    
}

module.exports = {index, penjumlahan};