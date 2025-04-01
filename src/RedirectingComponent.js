import React, { useEffect } from "react";

const RedirectingComponent = () => {
  useEffect(() => {
    const openApp = () => {
      const appScheme = "myapp://home"; // Custom URL scheme
      const appStoreLink = "https://apps.apple.com/in/app/bastian-customer-parts-portal/id6473263265"; // iOS App Store URL
      const playStoreWeb = "https://play.google.com/store/apps/details?id=com.bastianqrapp"; // Play Store URL
      const universalLink = "https://rahulrai11.github.io/my-redirect"; // Replace with your Universal Link

      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      if (/iPhone|iPad|iPod/i.test(userAgent)) {
        // iOS
        window.location.href = universalLink;
        setTimeout(() => {
          window.location.href = appStoreLink; // Redirect to App Store if the app is not installed
        }, 1000);
      } else if (/android/i.test(userAgent)) {
        // Android
        const link = document.createElement("a");
        link.href = appScheme;
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
          window.location.href = playStoreWeb; // Redirect to Play Store if the app is not installed
        }, 500);
      } else {
        // Fallback for other devices
        window.location.href = playStoreWeb;
      }
    };

    // openApp();
  }, []);

  return (
    <div>
      <p>
        Redirecting...! If nothing happens,{" "}
        <a href="myapp://home">click here...!</a>.
      </p>
    </div>
  );
};

export default RedirectingComponent;
