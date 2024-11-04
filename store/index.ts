import { create } from 'zustand'
import { Session } from '@supabase/supabase-js'
import { EditedProfile } from '@/types'

type State = {
  session: Session | null
  setSession: (payload: Session | null) => void

  editedProfile: EditedProfile
  updatedEditedProfile: (payload: EditedProfile) => void
  resetEditedProfile: () => void
}

const useStore = create<State>((set) => ({
  session: null,
  setSession: (payload) => set({ session: payload }),
  editedProfile: { username: '', favorites: '', avatar_url: '' },
  updatedEditedProfile: (payload) =>
    set({
      editedProfile: {
        username: payload.username,
        favorites: payload.favorites,
        avatar_url: payload.avatar_url,
      },
    }),
  resetEditedProfile: () =>
    set({
      editedProfile: {
        username: '',
        favorites: '',
        avatar_url: '',
      },
    }),
}))

export default useStore
