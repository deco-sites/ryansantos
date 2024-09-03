// import Spline from "npm:@splinetool/react-spline@^4.0.0";

const SplineContainer = () => {
  return (
      <div class="h-full w-full">
          {/* <Spline
          // deno-lint-ignore ban-ts-comment
          // @ts-ignore
          scene="https://prod.spline.design/NARp4hPGu22stDjT/scene.splinecode"
          /> */}

          <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.21/build/spline-viewer.js"></script>
          {/* deno-lint-ignore ban-ts-comment
          @ts-ignore */}
          <spline-viewer loading-anim-type="spinner-small-light" url="https://prod.spline.design/NARp4hPGu22stDjT/scene.splinecode"></spline-viewer>
      </div>
  );
}

export default SplineContainer;
