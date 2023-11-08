import classes from './page.module.css';

export default function Page() {
  return (
    <div className={classes.signup}>
      <div className={classes.warning}>
        <h1>WARNING</h1>
        <p>
          All new members must now sign and submit a liability release before
          joining.
        </p>
        <p>
          After receiving your release, you will be notified of your eligibility
          to create a new profile.
        </p>
        <p>Have a nice day!</p>
        <div className={classes.download}>
          <a href="/pdf/legal_release.pdf">Download release form</a>
        </div>
      </div>
    </div>
  );
}
