export const NOUNS_PROPOSAL_SUPPORT = {
  FOR: 'FOR',
  AGAINST: 'AGAINST',
  ABSTAIN: 'ABSTAIN',
} as const

export type PROPOSAL_SUPPORT =
  (typeof NOUNS_PROPOSAL_SUPPORT)[keyof typeof NOUNS_PROPOSAL_SUPPORT]