import React, { useContext, useState } from 'react';
import { myContext } from 'components/Context';
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// interface FormData {
//   postTitle: string;
//   postContent: string;
//   tags: string[];
// }

// const initialFormData: FormData = {
//   postTitle: '',
//   postContent: '',
//   tags: [],
// };

// const handleInputChange = (
//   setFormData: React.Dispatch<React.SetStateAction<FormData>>,
//   formData: FormData,
//   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// ): void => {
//   const { name, value } = event.target;
//   setFormData({ ...formData, [name]: value });
// };

// const handleSelectChange = (
//   setFormData: React.Dispatch<React.SetStateAction<FormData>>,
//   formData: FormData,
//   event: React.ChangeEvent<HTMLSelectElement>
// ): void => {
//   const options = event.target.options;
//   const selectedOptions: string[] = [];
//   for (let i = 0; i < options.length; i++) {
//     if (options[i].selected) {
//       selectedOptions.push(options[i].value);
//     }
//   }
//   setFormData({ ...formData, tags: selectedOptions });
// };

// function CreatePost(): JSX.Element {
//   const [formData, setFormData] = useState<FormData>(initialFormData);

//   function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
//     // Prevent the browser from reloading the page
//     event.preventDefault();

//     // Read the form data
//     const form = event.target as HTMLFormElement;
//     const formData = new FormData(form);

//     // pass formData as a fetch body directly:
//     // fetch('/some-api', { method: form.method, body: formData }): void;
//   }

//   function handleCancel(): void {
//     // redirect to posts page
//   }

//   return (
//     <form method="post" onSubmit={handleSubmit}>
//       <label>
//         Title:
//         <input
//           name="postTitle"
//           defaultValue="Title"
//           value={formData.postTitle}
//           onChange={handleInputChange.bind(null, setFormData, formData)}
//         />
//       </label>
//       <label>
//         Edit your post:
//         <textarea
//           name="postContent"
//           placeholder="deep thoughts"
//           rows={4}
//           cols={40}
//           value={formData.postContent}
//           onChange={handleInputChange.bind(null, setFormData, formData)}
//         />
//       </label>
//       <label>
//         Select post tags:
//         <select
//           name="tags"
//           id="tags"
//           multiple
//           required
//           value={formData.tags}
//           onChange={handleSelectChange.bind(null, setFormData, formData)}
//         >
//           <option value="travel">Travel</option>
//           <option value="cooking">Cooking</option>
//           <option value="hobbies">Hobbies</option>
//           <option value="music">Music</option>
//           <option value="career">Career</option>
//           <option value="programming">Programming</option>
//         </select>
//       </label>
//       <p className="tagDisplay"></p>
//       <hr />
//       <button onClick={handleCancel}>Cancel</button>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export { CreatePost };

const CENTER_STYLE = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const INPUT_STYLE = {};

export function CreatePost(): JSX.Element {
  const ctx = useContext(myContext);
  const theme = useTheme();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const handleTitle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => setTitle(e.target.value);

  const handleContent = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => setContent(e.target.value);

  const handleTags = (e: SelectChangeEvent<string[]>): void => {
    const value = e.target.value;
    setTags(typeof value === 'string' ? value.split(',') : value);
  };

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    // TODO: Please create an object, post, with author, title, content and tags.
    // TODO: Please check if it works or not.
    // const post = {
    // }
    // axios.post("https://localhost:4000/createpost", post);
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      style={{
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: theme.palette.secondary.dark,
        padding: '20px',
        borderRadius: 20,
        maxWidth: '60vw',
      }}
      gap={2}
    >
      <Grid item>
        <Typography variant="h3" align="center">
          Create Post
        </Typography>
      </Grid>

      <Grid item>
        <Box sx={CENTER_STYLE}>
          <Typography paddingRight={2}>Title</Typography>
          <TextField
            variant="standard"
            defaultValue={title}
            inputProps={{ style: INPUT_STYLE }}
            onChange={handleTitle}
          />
        </Box>
      </Grid>
      <Grid item>
        <Box sx={CENTER_STYLE}>
          <Typography paddingRight={2}>Content</Typography>
          <TextField
            variant="standard"
            defaultValue={content}
            onChange={handleContent}
          ></TextField>
        </Box>
      </Grid>
      <Grid item>
        <Box sx={CENTER_STYLE}>
          <Typography paddingRight={2}>Tags</Typography>
          <Select
            variant="standard"
            multiple
            defaultValue={[]}
            onChange={(e: SelectChangeEvent<string[]>) => handleTags(e)}
          >
            {[
              'Travel',
              'Cooking',
              'Hobbies',
              'Music',
              'Career',
              'Programming',
            ].map((option: string) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Grid>

      <Grid item style={CENTER_STYLE}>
        <Button
          variant="contained"
          onClick={() => navigate('/postspage')}
          style={{
            backgroundColor: theme.palette.primary.light,
            maxWidth: '150px',
          }}
        >
          Exit
        </Button>
      </Grid>

      <Grid item style={CENTER_STYLE}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          style={{
            backgroundColor: theme.palette.primary.light,
            maxWidth: '150px',
          }}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}
