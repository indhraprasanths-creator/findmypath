// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dewhpagaccryerbbcxds.supabase.co'; // Replace with your URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRld2hwYWdhY2NyeWVyYmJjeGRzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTE4NDE1NywiZXhwIjoyMDc2NzYwMTU3fQ.6Yj38IebHL1cI8AoiD5qwRVW_OxWZls2NcKzTclUIzI';   // Use anon key for frontend
export const supabase = createClient(supabaseUrl, supabaseKey);
