import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import ListInfo from "./ListInfo";

const CardBox = (props) => {
  return (
    <>
      <Card sx={{ width: 400 }}>
        <CardContent>
          <ListInfo />
        </CardContent>
        <CardActions>
          <Button size="small">connect</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardBox;
