import React, {useState} from 'react'

interface FormData {
    postTitle: string;
    postContent: string;
    tags: string[];
}

const initialFormData: FormData = {
    postTitle: "",
    postContent: "",
    tags: [],
};

const [formData, setFormData] = useState<FormData>(initialFormData);

const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
};

const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const options = event.target.options;
    const selectedOptions: string[] = [];
    for (let i = 0; i < options.length; i++) {
    if (options[i].selected) {
        selectedOptions.push(options[i].value);
    }
    }
    setFormData({ ...formData, tags: selectedOptions });
}

function CreatePost(): JSX.Element {

    function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        // Prevent the browser from reloading the page
        event.preventDefault();
    
        // Read the form data
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
    
        // pass formData as a fetch body directly:
        // fetch('/some-api', { method: form.method, body: formData }): void;
    
    }

    function handleCancel():void  {
        // redirect to posts page
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <label >
                Title:  
                <input 
                    name="postTitle" 
                    defaultValue="Title" 
                    value={formData.postTitle}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Edit your post:
                <textarea
                    name="postContent"
                    placeholder="deep thoughts"
                    rows={4}
                    cols={40}
                    value={formData.postContent}
                    onChange={handleInputChange}
                />
            </label>
            <label >
                Select post tags:
                <select 
                    name="tags" 
                    id="tags" 
                    multiple 
                    required
                    value={formData.tags}
                    onChange={handleSelectChange}
                >
                    <option value="travel">Travel</option>
                    <option value="cooking">Cooking</option>
                    <option value="hobbies">Hobbies</option>
                    <option value="music">Music</option>
                    <option value="career">Career</option>
                    <option value="programming">Programming</option>
                </select>
            </label>
            <p className="tagDisplay"></p>
            <hr />
            <button onClick={handleCancel}>Cancel</button>
            <button type="submit">Submit</button>
        </form>
  );
}

export default CreatePost;