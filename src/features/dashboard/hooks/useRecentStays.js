﻿import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns/fp";
import { useQuery } from "@tanstack/react-query";
import { getStaysAfterDate } from "../../../services/apiBookings.js";

export function useRecentStays() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));
  const queryDate = subDays(numDays, new Date()).toISOString();

  const { isLoading, data: stays } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ["stays", `last-${numDays}`],
  });

  const confirmedStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out",
  );

  return { isLoading, stays, confirmedStays, numDays };
}
