import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/p-jeff/p-jeff.github.io.git', // Update to point to your repository
        user: {
            name: 'Johannes', // update to use your name
            email: 'lotzejohannes@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);