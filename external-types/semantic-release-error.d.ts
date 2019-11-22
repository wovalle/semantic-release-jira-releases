declare module '@semantic-release/error' {
  class SemanticReleaseError extends Error {
    public message: any;
    private code: any;
    private details: any;

    constructor (
      message?: any,
      code?: any,
      details?: any,
    );
  }

  export = SemanticReleaseError;
}
