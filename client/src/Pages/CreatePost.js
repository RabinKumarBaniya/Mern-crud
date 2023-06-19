import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const CreatePost = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState({
        title: "",
        description: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost(prev => {
            return ({
                ...prev,
                [name]: value,
            })
        })
    };

    const handleClick = (event) => {
        event.preventDefault();
        axios.post("/create", post)
            .then(res => console.log(res))
            .catch((err) => console.log(err));

        navigate("posts");
    }

    return (
        <div style={{ width: "50%", margin: "auto", textAlign: "center" }}>
            <h1>Create a post</h1>
            <Form>
                <Form.Group>
                    <Form.Control
                        name="title"
                        value={post.title}
                        placeholder="Title"
                        style={{ marginBottom: "1rem" }}
                        onChange={handleChange}
                    />
                    <Form.Control
                        name="description"
                        value={post.description}
                        placeholder="Description"
                        style={{ marginBottom: "1rem" }}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button
                    style={{ width: "100%", marginBottom: "1rem" }}
                    variant="outline-success"
                    onClick={handleClick}>Create Post</Button>
            </Form>
            <Button
                variant='outline-dark'
                style={{ width: "100%" }}
                onClick={() => navigate(-1)}
            >Back</Button>
        </div>
    )
}

export default CreatePost;