import BlogList from './BlogList';
import {useState, useEffect } from 'react';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        //When clicking the button shows all the blogs unless the one that has been click because it has been filtered
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name]);

    return (
        <div className="home">
            <BlogList blogs={ blogs } title = "All blogs" handleDelete = { handleDelete }/>
            <button onClick={ () => setName('luigi')}>Change name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;