import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {Avatar,Card,CardActions,CardContent,CardHeader,CardMedia,Checkbox,IconButton,Typography} from "@mui/material";
const Post = () => {
  return (
    <Card sx={{ marginX:{md:3, xs:3}, marginY: {md:4, xs:4}, boxShadow:"2px 5px 15px 0px rgb(0 0 0 / 25%)", borderRadius:"15px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            V
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Vishvj"
        subheader="July 25, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://source.unsplash.com/random"
        alt="random image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
