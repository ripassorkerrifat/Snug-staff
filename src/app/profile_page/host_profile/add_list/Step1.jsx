import {Checkbox} from "@material-tailwind/react";

const Step1 = ({
    formData,
    categories,
    aminites,
    handleInputChange,
    selectedAmenities,
    handleCheckboxChange,
}) => {
    return (
        <div className="lg:grid lg:grid-cols-2  gap-x-10 gap-y-3">
            <div className="mt-2 ">
                <label htmlFor="category" className="block text-base mb-1">
                    Property category
                </label>
                <select
                    className="input-feild"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required>
                    <option value="" disabled>
                        Select one category ...
                    </option>
                    {categories?.map((category, index) => (
                        <option key={index} value={category.id}>
                            {category.title}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mt-2">
                <label htmlFor="title" className="block text-base mb-1">
                    Property title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="input-feild"
                    placeholder="Enter property title ..."
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="mt-2">
                <label htmlFor="area" className="block text-base mb-1">
                    Property total area
                </label>
                <input
                    type="number"
                    id="area"
                    name="area"
                    className="input-feild"
                    placeholder="Enter total property area..."
                    value={formData.area}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="mt-2">
                <label htmlFor="location" className="block text-base mb-1">
                    Property location
                </label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    className="input-feild"
                    placeholder="Enter property location..."
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mt-2">
                <label htmlFor="longtitude" className="block text-base mb-1">
                    Property location longtitude
                </label>
                <input
                    type="number"
                    id="longtitude"
                    name="longtitude"
                    className="input-feild"
                    placeholder="Enter property location longtitude..."
                    value={formData.longtitude}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mt-2">
                <label htmlFor="latitude" className="block text-base mb-1">
                    Property location latitude
                </label>
                <input
                    type="number"
                    id="latitude"
                    name="latitude"
                    className="input-feild"
                    placeholder="Enter property location latitude..."
                    value={formData.latitude}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="mt-2">
                <label
                    htmlFor="short_description"
                    className="block text-base mb-1">
                    Property short description
                </label>
                <textarea
                    type="text"
                    id="short_description"
                    name="short_description"
                    className="input-feild  py-3 text-gray-800 resize-none"
                    placeholder="Enter property short description..."
                    value={formData.short_description}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mt-2 ">
                <label htmlFor="description" className="block text-base mb-1">
                    Property description
                </label>
                <textarea
                    id="description"
                    name="description"
                    className="input-feild  py-3 text-gray-800 resize-none"
                    placeholder="Enter property description..."
                    value={formData.description}
                    onChange={handleInputChange}
                    required></textarea>
            </div>
            <div className="mt-2 md:col-span-2">
                <label className="block text-base mb-1">
                    Property aminites
                </label>
                <div>
                    {aminites?.map((aminities, index) => (
                        <Checkbox
                            key={index}
                            label={aminities.name}
                            checked={selectedAmenities.includes(aminities.id)}
                            onChange={(e) =>
                                handleCheckboxChange(e, aminities.id)
                            }
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Step1;
