const ERROR = 2
const ALWAYS = 'always'
const NEVER = 'never'

/**
 * @type {import('@commitlint/types').UserConfig}
 */
export default {
  rules: {
    'body-leading-blank': [ERROR, ALWAYS],
    'body-max-line-length': [ERROR, ALWAYS, 96],
    'footer-leading-blank': [ERROR, ALWAYS],
    'footer-max-line-length': [ERROR, ALWAYS, 96],
    /**
     * GitHub hides text beyond this length with an ellipsis
     */
    'header-max-length': [ERROR, ALWAYS, 72],
    'subject-case': [ERROR, ALWAYS, ['lower-case', 'kebab-case', 'snake-case']],
    'subject-empty': [ERROR, NEVER],
    'subject-full-stop': [ERROR, NEVER, '.'],
    'type-empty': [ERROR, NEVER],
    /**
     * Semver commit type convention
     *
     * M (MAJOR)             => Incompatible change
     * m (MINOR)             => Backward compatible feature
     * p (PATCH)             => Backward compatible bug fix
     * r (REVISION/REFACTOR) => Backward compatible improvement
     * x (MISCELLANEOUS)     => Neutral change (documentation, ci/cd, dev dependencies, etc.)
     */
    'type-enum': [ERROR, ALWAYS, ['M', 'm', 'p', 'r', 'x']]
  }
}
