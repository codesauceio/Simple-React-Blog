import _ from 'lodash';

class BlogPostApi {

    static getBlogPosts() {
        return [
            {
                id: 1,
                title: 'Everything You Need To Know About Grunt',
                author: 'Steve Jobs',
                authorUri: 'https://en.wikipedia.org/wiki/Steve_Jobs',
                avatarUri: 'http://media.paperblog.fr/i/493/4939054/origines-steve-jobs-L-greb0B.jpeg',
                category: 'DevOps',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio voluptatibus odio cumque saepe incidunt autem officiis laudantium quis necessitatibus, tempora explicabo blanditiis sint deleniti quisquam quae soluta eius distinctio eaque.',
                comments: [
                    {
                        author: 'Jon Dough',
                        avatarUri: 'http://www.techslices.in/content/images/2014/May/avatar.png',
                        date: '10-10-2016 10:43 PM',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at voluptatum, eum voluptate alias debitis dolorum dolores nesciunt maxime sapiente accusantium impedit delectus eaque quas consequuntur non, fugiat nam consectetur.'
                    },
                    {
                        author: 'Bob Smith',
                        avatarUri: 'http://runt-of-the-web.com/wordpress/wp-content/uploads/2014/06/runt-fd-4-resized.jpg',
                        date: '10-09-2016 02:09 AM',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, itaque. Aliquam autem dicta fugiat veritatis. Itaque qui tenetur, rerum commodi omnis ipsum, eius eaque minima error dicta! Repellendus, accusantium, maiores!'
                    }
                ]
            },
            {
                id: 2,
                title: 'Learning Pure React',
                author: 'Mark Zuckerberg',
                authorUri: 'https://en.wikipedia.org/wiki/Mark_Zuckerberg',
                avatarUri: 'https://65.media.tumblr.com/avatar_0181a7cfa719_128.png',
                category: 'Front-End',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio voluptatibus odio cumque saepe incidunt autem officiis laudantium quis necessitatibus, tempora explicabo blanditiis sint deleniti quisquam quae soluta eius distinctio eaque.',
                comments: [
                    {
                        author: 'Jane Doe',
                        avatarUri: 'https://platform-user-uploads.s3.amazonaws.com/user/photo/13606/large_profile-4.png',
                        date: '10-10-2016 10:43 PM',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at voluptatum, eum voluptate alias debitis dolorum dolores nesciunt maxime sapiente accusantium impedit delectus eaque quas consequuntur non, fugiat nam consectetur.'
                    },
                    {
                        author: 'Jon Dough',
                        avatarUri: 'http://www.techslices.in/content/images/2014/May/avatar.png',
                        date: '10-10-2016 10:43 PM',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at voluptatum, eum voluptate alias debitis dolorum dolores nesciunt maxime sapiente accusantium impedit delectus eaque quas consequuntur non, fugiat nam consectetur.'
                    },
                    {
                        author: 'Bob Smith',
                        avatarUri: 'http://runt-of-the-web.com/wordpress/wp-content/uploads/2014/06/runt-fd-4-resized.jpg',
                        date: '10-09-2016 02:09 AM',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, itaque. Aliquam autem dicta fugiat veritatis. Itaque qui tenetur, rerum commodi omnis ipsum, eius eaque minima error dicta! Repellendus, accusantium, maiores!'
                    }
                ]
            },
            {
                id: 3,
                title: 'Why React Is Still Better Than Angular 2',
                author: 'Bill Gates',
                authorUri: 'https://en.wikipedia.org/wiki/Bill_Gates',
                avatarUri: 'https://aphaih.files.wordpress.com/2011/09/bill-gates.png',
                category: 'Front-End',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio voluptatibus odio cumque saepe incidunt autem officiis laudantium quis necessitatibus, tempora explicabo blanditiis sint deleniti quisquam quae soluta eius distinctio eaque.',
                comments: [
                    {
                        author: 'Jon Dough',
                        avatarUri: 'http://www.techslices.in/content/images/2014/May/avatar.png',
                        date: '10-10-2016 10:43 PM',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at voluptatum, eum voluptate alias debitis dolorum dolores nesciunt maxime sapiente accusantium impedit delectus eaque quas consequuntur non, fugiat nam consectetur.'
                    }
                ]
            },
            {
                id: 4,
                title: 'My \'Reaction\' to React',
                author: 'Mark Zuckerberg',
                authorUri: 'https://en.wikipedia.org/wiki/Mark_Zuckerberg',
                avatarUri: 'https://65.media.tumblr.com/avatar_0181a7cfa719_128.png',
                category: 'Front-End',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio voluptatibus odio cumque saepe incidunt autem officiis laudantium quis necessitatibus, tempora explicabo blanditiis sint deleniti quisquam quae soluta eius distinctio eaque.',
                comments: [
                    {
                        author: 'Jane Doe',
                        avatarUri: 'https://platform-user-uploads.s3.amazonaws.com/user/photo/13606/large_profile-4.png',
                        date: '10-10-2016 10:43 PM',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at voluptatum, eum voluptate alias debitis dolorum dolores nesciunt maxime sapiente accusantium impedit delectus eaque quas consequuntur non, fugiat nam consectetur.'
                    }
                ]
            }
        ];
    }

    static saveBlogPostComment (postId, comment, userName) {
        let posts = this.getBlogPosts();
        let post = _.find(posts, (p) => {
            return p.id === postId;
        });

        let comments = post.comments;
        comments.push({
            author: userName,
            avatarUri: 'https://forum.opencart.com/styles/opencart2016/theme/images/default_avatar.jpg',
            date: new Date(),
            body: comment
        });

        return posts;
    }
};

export default BlogPostApi;
