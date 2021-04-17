const path = require('path');
//entry -> output ilk başta zorunlu olan şeylerdir.



module.exports = {
    
    mode:'development',
    entry: './src/app.js',
    //entry: './src/select.js',
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{
        rules:[{//Yani node_modules içinde olmayan js dosyaları için babel kullan. Kursta gösterilen içerik çalışmadı, oturup bir saat bütün babel uzantılı dosyaları günelledim. Önemli olan package.json içinde yazanları indirmek ve webpack.config.js içindeki modules kısmının tutması.
            loader:'babel-loader',
            test: /\.js$/,
            exclude:/node_modules/,
            
        },{
            test:/\.s?css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool:'eval-cheap-module-source-map',
    devServer:{
        contentBase:path.join(__dirname,'public'),//Burayı live server yerine kullanıyoruz sadece. index dosyamızın nerede olduğunu tam adres olarak girmiş oluyoruz.
        historyApiFallback:true
    }
};

/*loader /* use:{
                loader:'babel-loader',
                options:{
                    presets:["@babel/preset-env","@babel/preset-react"]
                }
            } */