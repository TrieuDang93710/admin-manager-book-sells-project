import {Users} from "../model/modelUser"

class userController =  {
  signUpUser: async (req, res) => {
    try {
        let check = await Users.findOne({ email: req.body.email });

        if (check) {
            return res.status(400).json({ success: false, errors: "Người dùng đã tồn tại." });
        }

        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }

        const user = new Users({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
            cartData: cart,
        });

        await user.save();

        const data = {
            user: {
                id: user.id
            }
        };

        const token = jwt.sign(data, 'secret_ecom');
        res.json({ success: true, token });
    } catch (error) {
        console.error('Lỗi trong quá trình đăng ký:', error);
        res.status(500).json({ success: false, errors: 'Lỗi máy chủ nội bộ' });
    }
},
  loginUser:  async (req, res) => {
    try {
        let user = await Users.findOne({ email: req.body.email });

        if (user) {
            const passCompare = req.body.password === user.password;

            if (passCompare) {
                const data = {
                    user: {
                        id: user.id
                    }
                };

                const token = jwt.sign(data, 'secret_ecom');
                res.json({ success: true, token });
            } else {
                res.json({ success: false, errors: "Sai mật khẩu" });
            }
        } else {
            res.json({ success: false, errors: "Sai địa chỉ email" });
        }
    } catch (error) {
        console.error('Lỗi trong quá trình đăng nhập:', error);
        res.status(500).json({ success: false, errors: 'Lỗi máy chủ nội bộ' });
    }
},
}