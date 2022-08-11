import { AppBar, Stack, List, Typography, Link } from "@mui/material";
import SearchBox from "./search";
import TrendingItem from "./trendingItem";
import { useState } from "react";

export default function Trends() {
  const [showMore, setShowMore] = useState(false);

  const Trends = [
    { location: "Turkey", subject: "Galatasaray", number: 334567 },
    { location: "Turkey", subject: "Fenerbahce", number: 300567 },
    { location: "Turkey", subject: "Besiktas", number: 270276 },
    { location: "Turkey", subject: "Trabzonspor", number: 250123 },
    { location: "Turkey", subject: "Goztepe", number: 150276 },
    { location: "Turkey", subject: "Adanaspor", number: 120123 },
    { location: "Turkey", subject: "Bursaspor", number: 33567 },
    { location: "Turkey", subject: "Fenerbahce2", number: 30567 },
    { location: "Turkey", subject: "Besiktas2", number: 27076 },
    { location: "Turkey", subject: "Trabzonspor2", number: 25023 },
    { location: "Turkey", subject: "Goztepe2", number: 15027 },
  ];

  return (
    <Stack width={"390px"} paddingLeft={4}>
      <AppBar position="sticky">
        <SearchBox />
      </AppBar>
      <List
        sx={{
          bgcolor: "background.paper",
          borderRadius: "14px",
          padding: "15px",
          width: "100%",
        }}
      >
        <Typography variant={"subtitle1"}>Trends for you</Typography>
        {!showMore
          ? Trends.slice(0, 7).map((trend, index) => {
              return (
                <TrendingItem
                  key={index}
                  index={index}
                  location={trend.location}
                  subject={trend.subject}
                  number={trend.number}
                />
              );
            })
          : Trends.map((trend, index) => {
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
        <Link
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          <Typography variant="body2" color="primary.main">
            {showMore ? "Show less" : "Show more"}
          </Typography>
        </Link>
      </List>
    </Stack>
  );
}
