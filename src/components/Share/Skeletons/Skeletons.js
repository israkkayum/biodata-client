import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

const data = [
  {
    src:
      "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
    title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
    channel: "Don Diablo",
    views: "396 k views",
    createdAt: "a week ago",
  },
  {
    src:
      "https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA",
    title: "Queen - Greatest Hits",
    channel: "Queen Official",
    views: "40 M views",
    createdAt: "3 years ago",
  },
  {
    src:
      "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
    title: "Calvin Harris, Sam Smith - Promises (Official Video)",
    channel: "Calvin Harris",
    views: "130 M views",
    createdAt: "10 months ago",
  },
];

interface MediaProps {
  loading?: boolean;
}

function Media(props: MediaProps) {
  const { loading = false } = props;

  return (
    <Grid container spacing={4}>
      {(loading ? Array.from(new Array(6)) : data).map((item, index) => (
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <Box
            key={index}
            sx={{
              width: "100%",
              marginRight: 0.5,
              my: 3,
            }}
          >
            {item ? (
              <img
                style={{ width: "100%", height: 500 }}
                alt={item.title}
                src={item.src}
              />
            ) : (
              <Skeleton variant="rectangular" width="100%" height={250} />
            )}
            {item ? (
              <Box sx={{ pr: 2 }}>
                <Typography gutterBottom variant="body2">
                  {item.title}
                </Typography>
                <Typography
                  display="block"
                  variant="caption"
                  color="text.secondary"
                >
                  {item.channel}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {`${item.views} • ${item.createdAt}`}
                </Typography>
              </Box>
            ) : (
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            )}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

const Skeletons = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media loading />
    </Box>
  );
};

export default Skeletons;
