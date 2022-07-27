import { Stack, Typography } from "@mui/material";
import SearchBox from "./search";
import TrendingItem from "./trendingItem";

export default function Trends() {
  const Trends = [
    { location: "Turkey", subject: "Galatasaray", number: 334567 },
    { location: "Turkey", subject: "Fenerbahce", number: 300567 },
    { location: "Turkey", subject: "Besiktas", number: 270276 },
    { location: "Turkey", subject: "Trabzonspor", number: 250123 },
    { location: "Turkey", subject: "Goztepe", number: 150276 },
    { location: "Turkey", subject: "Adanaspor", number: 120123 },
  ];
  return (
    <Stack width={"390px"} paddingLeft={5}>
      <SearchBox />
      <Stack
        sx={{
          bgcolor: "background.paper",
          borderRadius: "14px",
          padding: "15px",
          width: "100%",
        }}
      >
        <Typography variant={"subtitle1"}>Trends for you</Typography>
        {Trends.map((trend, index) => {
          return (
            <TrendingItem
              key={index}
              index={index}
              location={trend.location}
              subject={trend.subject}
              number={trend.number}
            />
          );
        })}
        <Typography variant="body2" color="primary.main">
          Show more
        </Typography>
      </Stack>
    </Stack>
  );
}
