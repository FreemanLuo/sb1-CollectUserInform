import { createClient } from '@supabase/supabase-js';
import type { UserSubmission } from './types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<{
  public: {
    Tables: {
      UserFillDB: {
        Row: UserSubmission
        Insert: Omit<UserSubmission, 'id' | 'created_at'>
      }
    }
  }
}>(supabaseUrl, supabaseKey);