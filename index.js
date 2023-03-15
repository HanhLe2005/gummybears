(function (window, _) {
  window.gummybears = window.gummybears || {
    numz: {
      /**
       * 
       * @param {number} degrees 
       * @returns number
       */
      degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
      },

      /**
       * 
       * @param {number} radians 
       * @returns number
       */

      radiansToDegrees(radians) {
        return radians * 180 / Math.PI;
      },

      getAngleDegrees(pointA, pointB) {
        const
          distanceX = pointB.x - pointA.x,
          distanceY = pointB.y - pointA.y,
          radians = Math.atan2(distanceY, distanceX),
          degrees = radians * 180 / Math.PI;
        return degrees;
      },

    },
    phyz: {
      /**
       * 
       * @param {object} obj1 
       * @param {number} obj1.x
       * @param {number} obj1.y
       * @param {object} obj2 
       * @param {number} obj2.x
       * @param {number} obj2.y
       * @returns {number} number represents distance between obj1 and obj2
       */
      calcDistance(obj1, obj2) {
        const
          distanceX = obj2.x - obj1.x,
          distanceY = obj2.y - obj1.y,
          distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        return distance;
      },

      makeBody: function (type, {
        velocityX = 0,
        velocityY = 0,
        rotationalVelocity = 0,
        integrity = 1,
        density = 1,
        volatility = 0
      } = {}) {
        if (type === undefined) throw new Error('You must provide a valid String for the type parameter!');
        return {
          type: type,
          velocityX: velocityX,
          velocityY: velocityY,
          rotationalVelocity: rotationalVelocity,
          integrity: integrity,
          density: density,
          volatility: volatility,

          /**
           * @param {Number} A number representing the force of the impact.
           * @param {Object} The other body involved in the collision.
           */
          handleCollision(impact, body) {
            // template method //
          },

          /**
           * Can be overridden in the concrete body to provide a custom update()
           * method.
           */
          update(event) {
            // template method //
          }
        };
      },
    },
  };

}(window, window._));

gummybears.phyz.calcDistance();
