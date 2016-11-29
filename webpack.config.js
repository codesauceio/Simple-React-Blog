var webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!bootstrap/dist/js/bootstrap.min.js',
        'script!lodash/lodash.min.js',
        './app/app.js'  
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            '_': 'lodash'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            applicationStyles: 'app/styles/app.scss',
            Main: 'app/components/Main.js',
            BlogPosts: 'app/components/posts/BlogPosts.js',
            BlogPostApi: 'app/api/blogPostApi.js',
            Post: 'app/components/posts/Post.js',
            Comments: 'app/components/comments/Comments.js',
            Comment: 'app/components/comments/Comment.js',
            CommentForm: 'app/components/comments/CommentForm.js'
        },
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.js?$/,
                exclude: /(node_modules | bower_components)/
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader',
            }
        ]
    },
    devtool: 'inline-source-map'
}
