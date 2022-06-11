import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/Link'

export default function OutlinedCard(props) {
  return (
    <div className="inline-block">
    <Link href={`posts/${props.id}`}>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined" sx={{ maxWidth:300, m:1 }}>
          <React.Fragment>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{props.date}</Typography>
              <Typography variant="h5" component="div">{props.title}</Typography>
              <Typography variant="p">Language: {props.body}</Typography>
            </CardContent>
          </React.Fragment>
        </Card>
      </Box>
    </Link>
    </div>
  );
}
