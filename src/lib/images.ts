/** Base URL for deployment (e.g. '/' or '/propelschool/'). Use for all public assets. */
const BASE = import.meta.env.BASE_URL

/** Resolve a public asset path with the correct base (for GH Pages etc.). */
export function publicUrl(path: string): string {
  return BASE + path.replace(/^\//, '')
}

/** PNG image paths (public/images + public/pic). */
export const IMAGES = {
  kidsClassroom: BASE + 'images/kids-classroom.png',
  kidsPlaying: BASE + 'images/kids-playing.png',
  schoolBuilding: BASE + 'images/school-building.png',
  classroomActivity: BASE + 'images/classroom-activity.png',
  /** From pic folder */
  picKids: BASE + 'pic/kids.png',
  picKidcare: BASE + 'pic/kidcare.png',
  picLetters: BASE + 'pic/letters.png',
  picAnimation: BASE + 'pic/animation.png',
} as const

/** Background images (pic folder) for sections with animation. */
export const BACKGROUNDS = {
  picKids: BASE + 'pic/kids.png',
  picLetters: BASE + 'pic/letters.png',
  picKidcare: BASE + 'pic/kidcare.png',
  picAnimation: BASE + 'pic/animation.png',
} as const
