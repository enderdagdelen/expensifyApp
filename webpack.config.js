const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


//entry -> output ilk başta zorunlu olan şeylerdir.

module.exports = (env, argv) => {

    const isProduction = argv.mode === 'production'//(env === '')
    console.log('env',env);
    return{
        mode:'development',
        entry: './src/app.js',
        //entry: './src/select.js',
        output:{
            path:path.join(__dirname,'public','dist'),
            filename:'bundle.js'
        },
        module:{
            rules:[{//Yani node_modules içinde olmayan js dosyaları için babel kullan. Kursta gösterilen içerik çalışmadı, oturup bir saat bütün babel uzantılı dosyaları günelledim. Önemli olan package.json içinde yazanları indirmek ve webpack.config.js içindeki modules kısmının tutması.
                loader:'babel-loader',
                test: /\.js$/,
                exclude:/node_modules/,
                
            },{
                test:/\.s?css$/,
                use:[MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options:{
                            sourceMap:true
                        }
                    },
                    {
                        loader:'sass-loader',
                        options:{
                            sourceMap:true
                        }
                    }
                ]
            }]
        },
        plugins:[
            new MiniCssExtractPlugin({
                filename:'style.css'
            })
        ],
        devtool: isProduction ? 'source-map' :'inline-cheap-module-source-map',
        devServer:{
            contentBase:path.join(__dirname,'public'),//Burayı live server yerine kullanıyoruz sadece. index dosyamızın nerede olduğunu tam adres olarak girmiş oluyoruz.
            historyApiFallback:true,
            publicPath:'/dist/'
        }
    }
}



/* Ders 133 dk 4.12 da webpacki production'a hazırlama aşamasından önceki hali
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

*/