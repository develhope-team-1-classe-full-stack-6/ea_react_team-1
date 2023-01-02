import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120}}>
            <InputLabel variant="standard"
            shrink
            margin="dense"
            >Prezzi</InputLabel>
            <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                IconComponent={ExpandMoreIcon}
                inputProps={{ 'aria-label': 'Without label' }}
                MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: {
                            xs: 'yellow',
                            md: 'orange !important'},
                        '& .MuiMenuItem-root': {
                          padding: 10,
                        },
                      },
                    },
                  }}
            >
                <MenuItem value="">
                    Italiano
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                
            </Select>
        </FormControl>

    )

}