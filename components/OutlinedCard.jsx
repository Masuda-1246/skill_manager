import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/Link'

export default function OutlinedCard(props) {
  return (
    <div>
    <Link href={`posts/${props.id}`}>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined" sx={{ maxWidth:200, m:1 }}>
          <React.Fragment>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{props.date}</Typography>
              <Typography variant="h5" component="div">{props.title}</Typography>
              <Typography variant="body2">{props.body}</Typography>
            </CardContent>
          </React.Fragment>
        </Card>
      </Box>
    </Link>
    </div>
  );
}
