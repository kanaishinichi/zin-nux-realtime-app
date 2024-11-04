import { FC } from 'react'
import { LogoutIcon, ExclamationCircleIcon } from '@heroicons/react/solid'
import { supabase } from '@/utils/supabase'

export const DashBoard: FC = () => {
  const signOut = () => {
    supabase.auth.signOut()
  }
  return (
    <div>
      <LogoutIcon
        className="my-6 h-6 w-6 cursor-pointer text-blue-500"
        onClick={signOut}
      />
    </div>
  )
}
