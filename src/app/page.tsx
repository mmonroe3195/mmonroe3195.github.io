"use client";
import { useEffect, useState } from 'react';
import Markdown from '../../node_modules/markdown-to-jsx/dist/index';

function Home() {
    const file_name = 'set.md';
    const [post, setPost] = useState('');

    useEffect(() => {
        import(`./${file_name}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });

    return (
        <div className="container">
            <Markdown>
                {post}
            </Markdown>
        </div>
    );
}

export default Home;