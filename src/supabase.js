import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nbvhevgeiydookdjjevo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5idmhldmdlaXlkb29rZGpqZXZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYxMDA4OTUsImV4cCI6MTk5MTY3Njg5NX0.B6J2qDVQnJGuvBd8mtFzLEwp3ZLqGkKPotDeorBhUiM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
