import { createClient } from '@supabase/supabase-js'
import Database from './database.types'

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseURL || !supabaseAnonKey) {
  throw Error('NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY have not been specified!')
}

export const supabase = createClient<Database>(supabaseURL, supabaseAnonKey)