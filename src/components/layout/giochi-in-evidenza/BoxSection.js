import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import CustomButton from '../../components/button/CustomButton';
import {boxes} from './database';

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.d1,
}));

export default function BoxSection() {
  return (
    <Box>
      <Grid container spacing={2}>
        {boxes.map((item) => (
          <Grid xs={12} sm={6} md={4}>
            <Item>{item.box}</Item>
        </Grid>
        ))}
      </Grid>
      <CustomButton />
    </Box>
    
  );
}