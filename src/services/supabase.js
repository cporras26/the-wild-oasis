import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ywgrhxmfxnjqsggvkxkm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsIn" +
  "JlZiI6Inl3Z3JoeG1meG5qcXNnZ3ZreGttIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNzIwOTMsImV4cCI6MjAxNDY" +
  "0ODA5M30.-cWdjhDjTrFHuhrHl9h2On7Tq-pB9BwwnxgHfc3BR1M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
