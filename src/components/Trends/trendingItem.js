import { Stack, Typography } from "@mui/material";

export default function TrendingItem(props) {
  return (
    <Stack sx={{ padding: "10px 0" }} spacing={1}>
      <Typography
        variant={"caption"}
        sx={{ color: "text.secondary", lineHeight: "1em" }}
      >
        {props.index + 1} · Trends in {props.location}
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: "1em" }}>
        {props.subject}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "text.secondary", lineHeight: "1em" }}
      >
        {props.number}
      </Typography>
    </Stack>
  );
}
