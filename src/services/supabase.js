import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lgmspdlzylnuipabggdu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnbXNwZGx6eWxudWlwYWJnZ2R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEyNjM4MTAsImV4cCI6MjA0NjgzOTgxMH0.zfS0RuJtzZ1Yoo0_3tsU8Alu0U5Ak_GJaqXYPeeeyNY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
